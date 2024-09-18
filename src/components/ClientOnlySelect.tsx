import { useEffect, useState } from 'react';
import { Select, SelectProps } from '@/components/ui/select';

export function ClientOnlySelect(props: SelectProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-10 w-full bg-gray-200 animate-pulse rounded" />;
  }

  return <Select {...props} />;
}