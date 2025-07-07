import { ITask } from '@/app/@types/main';
import Link from 'next/link';
import React from 'react'

interface IItemProps {
  item: ITask;
}

function Item({ item }: IItemProps) {
  return (
    <div>
      <Link href={`/Itempage/${item.id}`}>
        <li
          key={item.id}
          className="flex items-center gap-3 bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition cursor-pointer"
        >
          <input
            type="checkbox"
            checked={item.completed}
            className="form-checkbox h-5 w-5 text-cyan-500"
            readOnly
          />
          <span
            className={`text-base ${item.completed ? 'line-through text-slate-400' : ''
              }`}
          >
            {item.todo}
          </span>
        </li>
        </Link>
    </div>
  )
}

export default Item