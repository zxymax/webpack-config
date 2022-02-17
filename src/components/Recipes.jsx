import { useState } from 'react'

const elvenRecipe = {
  leather: 2,
  iron: 1,
  refined: 4
}

const elvenGau = {
  ...elvenRecipe,
  lea: 1,
  refi: 1
}

const Recipes = () => {
  const [ recipe, setRecipe ] = useState(elvenRecipe)

  return (
    <div>
      <h3>current recipe</h3>
      <button onClick={() => setRecipe(elvenRecipe)}>Elven</button>
      <button onClick={() => setRecipe(elvenGau)}>Gau</button>

      <ul>
        {
          Object.keys(recipe).map((material) => (
            <li key={material}>
              {material}: {recipe[material]}
            </li>
          ))
        }
    </ul>
    </div>
  )

}

export default Recipes
