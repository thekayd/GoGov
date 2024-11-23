import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import PaymentConfirmationCard from "./page"

export default function PaymentDialog() {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <PaymentConfirmationCard />
      </DialogContent>
    </Dialog>
  )
}
