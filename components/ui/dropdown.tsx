'use client';
import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useEffect, useState } from 'react';
import frameworks from '@/app/_fak.json';
import Link from 'next/link';

interface DropDownProps {
  matkul: string;
}

export default function DropDown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  useEffect(() => {
    const cachedValue = document.cookie.replace(/(?:(?:^|.*;\s*)fakultas\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    if (cachedValue) {
      setValue(cachedValue);
    }
  }, []);

  useEffect(() => {
    document.cookie = `fakultas=${value || ''}`;
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[38%] bg-light dark:bg-dark max-lg:w-full max-lg:py-5 h-auto rounded-xl justify-between  border-slate-700 border-2 ">
          {value ? 'Fakultas ' + frameworks.find((framework) => framework.fakultas === value)?.fakultas : 'Pilih Fakultas'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[70%] mx-auto p-0 max-lg:w-full">
        <Command>
          <CommandInput placeholder="Cari Fakultas..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.fakultas}
                  value={framework.fakultas}
                  onSelect={(currentValue) => {
                    setOpen(false);
                  }}
                >
                  <Check className={cn('mr-2 h-4 w-4', value === framework.fakultas ? 'opacity-100' : 'opacity-0')} />
                  <button
                    onClick={() => {
                      setValue(framework.fakultas);
                    }}
                    className="text-left"
                  >
                    Fakultas {framework.fakultas}
                  </button>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
