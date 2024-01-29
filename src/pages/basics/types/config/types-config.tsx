import { DataTable } from "@/components/ui/data-table";
import { columns } from "./types-columns";

export const typeDescriptions = [
  {name: 'string', description: 'represents text data'},
  {name: 'number', description: 'represents numeric values'},
  {name: 'boolean', description: 'has true and false values'},
  {name: 'null', description: 'has one value: null'},
  {name: 'undefined', description: 'has one value: undefined; it is a default value of an uninitialized variable'},
  {name: 'symbol', description: 'represents a unique constant value'},
]

export const typesConfig = {
  mainText: (
    <>
      <p>In TypeScript, a type is a convenient way to refer to the different <b>properties</b> and <b>functions</b> that a value has. A value is anything that you can assign to a variable e.g., a number, a string, an array, an object, and a function.</p>
      <br/>
      <p>TypeScript inherits the built-in types from JavaScript. TypeScript types are categorized into:</p>
      <ul className="list-disc list-inside">
        <li>Primitive types</li>
        <li>Object types</li>
      </ul>
    </>
    )
}