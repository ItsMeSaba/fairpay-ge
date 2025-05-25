import React, { useState, useMemo, useRef, useEffect } from 'react';

interface Props {
  options: { label: string; value: string }[];
  label: string;
  appliedOptions: string[];
  onApply: (selected: string[]) => void;
  displaySearch?: boolean;
}

export function FiltrationModule({
  options,
  label,
  onApply,
  appliedOptions,
  displaySearch = true,
}: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown if click outside
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  // Filtered list by search term
  const filteredOptions = useMemo(
    () => options?.filter((opt: any) => opt.label.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  // Total count of selected items
  // const totalSelectedCount = useMemo(
  //   () =>
  //     options
  //       ?.filter((opt) => selected.includes(opt.value))
  //       .reduce((sum, opt) => sum + opt.count, 0),
  //   [selected]
  // );

  const toggleItem = (id: string) => {
    setSelected((sel) => (sel.includes(id) ? sel.filter((x) => x !== id) : [...sel, id]));
  };

  const allIds = options?.map((o) => o.value);
  // const noneSelected = selected?.length === 0;
  // const allSelected = selected?.length === allIds?.length;

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="px-4 py-2 bg-gray-100 rounded-md flex items-center space-x-2 hover:bg-gray-200"
      >
        <span>{label}</span>

        {appliedOptions.length > 0 && (
          <span className="px-2 py-0.5 bg-blue-600 text-white text-xs rounded">
            {appliedOptions.length}
          </span>
        )}

        <svg
          className={`w-4 h-4 mt-[2px] transform transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute mt-1 w-64 bg-white border rounded-md shadow-lg z-10">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b">
            <div className="flex space-x-4">
              <button
                onClick={() => setSelected(allIds)}
                className="text-sm text-blue-600 hover:underline"
              >
                ყველა
              </button>

              <button
                onClick={() => setSelected([])}
                className="text-sm text-gray-600 hover:underline"
              >
                გასუფთავება
              </button>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600">
              ✕
            </button>
          </div>

          {displaySearch && (
            <div className="px-4 pt-2">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-2 py-1 border rounded focus:outline-none"
              />
            </div>
          )}

          {/* Options */}
          <div className="max-h-[300px] overflow-y-auto px-4 py-2">
            {filteredOptions.map((opt: any) => (
              <label key={opt.value} className="flex items-center justify-between py-1">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(opt.value)}
                    onChange={() => toggleItem(opt.value)}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />

                  <span>{opt.label}</span>
                </div>

                {/* <span className="text-sm text-gray-500">{opt.count}</span> */}
              </label>
            ))}

            {filteredOptions.length === 0 && (
              <p className="py-2 text-center text-gray-400">No matching categories</p>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t">
            <button
              onClick={() => {
                onApply(selected);
                setOpen(false);
              }}
              className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              შედეგების ნახვა
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
