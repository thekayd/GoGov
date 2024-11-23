import { useMutation } from "@tanstack/react-query"

import { env } from "@/env.mjs"
import { createSupabaseBrowser } from "@/lib/supabase/client"

export function useUploadFile({
  onSuccess,
  onError,
}: {
  onSuccess: () => void
  onError: () => void
}) {
  return useMutation({
    onError: onError,
    onSuccess: onSuccess,
    mutationKey: ["file-upload"],
    mutationFn: async ({ file, path }: { file: File; path: string }) => {
      const db = createSupabaseBrowser()

      const user = await db.auth.getUser()
      console.log("Current User: ", user.data.user?.email)
      // Upload File to Storage
      const { data, error } = await db.storage
        .from(env.NEXT_PUBLIC_BUCKET_NAME)
        .upload(`${"hello"}/${file.name}`, file, {
          upsert: true,
          contentType: file.type,
        })

      if (error) {
        console.log("Profile Error: ", error)
        return Promise.reject(new Error(error.message))
      }

      // Get File Download URL
      const { data: fileUrl, error: fileUrlError } = await db.storage
        .from("avatars")
        .download("folder/avatar1.png", {
          transform: {
            width: 100,
            height: 100,
            quality: 80,
          },
        })

      return data
    },
  })
}

export async function uploadFiles(files: File[]) {
  const db = createSupabaseBrowser()
  const user = await db.auth.getUser()
  console.log("Current User: ", user.data.user?.email)

  return await Promise.all(
    files.map(async (file) => {
      const { data, error } = await db.storage
        .from(env.NEXT_PUBLIC_BUCKET_NAME)
        .upload(`${"hello"}/${file.name}`, file, {
          upsert: true,
          contentType: file.type,
        })

      if (error) {
        console.log("Profile Error: ", error)
        return Promise.reject(new Error(error.message))
      }

      return data.fullPath
    })
  )
}
