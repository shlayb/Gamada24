'use client';

import { Checkbox } from '@/components/ui/checkbox';

interface CheckItemProps {
  item: string;
  link?: string;
}

export default function CheckItem({ item, link }: CheckItemProps) {
  return (
    <div className="flex items-center gap-3 py-2">
      <Checkbox id={item} />
      <label htmlFor={item} className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-90">
        {item}{' '}
        {link ? (
          <a href={link} target="_blank" className="text-sky-600">
            (klik disini)
          </a>
        ) : null}
      </label>
    </div>
  );
}
