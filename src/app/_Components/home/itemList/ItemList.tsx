import { ITask } from '@/app/@types/main';
import { fetchData } from '@/app/services/service'
import Item from '../item/Item';

async function ItemList() {
  const todos: ITask[] = await fetchData();
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-slate-900 text-slate-200 rounded-xl shadow-md">
      <ul className="space-y-3">
        {todos.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ItemList
