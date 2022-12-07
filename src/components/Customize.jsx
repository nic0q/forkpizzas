import { useState } from "react"



const Ingredient = ({ name, image = "", addIngredient }) => {

  return (
    <div
      onClick={addIngredient}
      className={`flex w-44 h-12 border-2 border-gray-200 hover:border-gray-400 bg-white rounded-lg items-center text-sm m-2 cursor-pointer shadow-xl drop-shadow-md ${
        image !== "" ? "justify-evenly" : "justify-center"
      }`}
    >
      <p>{name}</p>
      {image !== "" ? (
        <img className="h-8 w-8" alt="ingredient" src={image}></img>
      ) : (
        ""
      )}
    </div>
  )
}
const IngredientList = ({ name, ingredients }) => {
  return (
    <div className="">
      <h4 className="text-start underline decoration-wavy mb-1">{name}</h4>
      <div className="w-[full] flex flex-wrap pb-3">
        {ingredients.map((ingredient) => (
          <Ingredient name={ingredient.name} image={ingredient.image} addIngredient = {ingredient.addIngredient} />
        ))}
      </div>
    </div>
  )
}
export default function Customize() {
  const [ingredientsCost, setIngredientsCost] = useState(0)
  console.log(ingredientsCost)
  const add = (price) => {
    setIngredientsCost((prev) => prev + price)
  }
  return (
    <div className="flex flex-col bg-black h-screen items-center justify-center text-sm  text-gray-700">
      <div className="flex bg-gray-100 w-[70%] rounded-2xl shadow-xl drop-shadow-md">
        <div className="w-[70%]">
          <img
            className="h-full w-full rounded-l-2xl"
            alt="pizza"
            src="https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ></img>
        </div>
        <div className="flex flex-col">

        
        <div className="pl-6 pt-6 ">
          <IngredientList
            name="Carnes"
            ingredients={[
              {
                name: "Carne",
                image: "https://www.svgrepo.com/show/417242/tuna.svg",
                addIngredient: () => {add(1200)}
              },
              { name: "Mechada" },
              {
                name: "Pepperoni",
                image: "https://www.svgrepo.com/show/417228/pepperoni.svg",
                addIngredient: () => {add(1200)}
              },
              {
                name: "Salchicha",
                image: "https://www.svgrepo.com/show/417235/sausage.svg",
                addIngredient: () => {add(1200)}
              },
              {
                name: "Jamón",
                image: "https://www.svgrepo.com/show/417253/ham.svg",
                addIngredient: () => {add(1200)}
              },
              {
                name: "Pollo",
                image: "https://www.svgrepo.com/show/417249/chicken.svg",
                addIngredient: () => {add(1200)}
              },
              {
                name: "Tocino",
                image: "https://www.svgrepo.com/show/417243/bacon.svg",
                addIngredient: () => {add(1200)}
              },
            ]}
          />
          <IngredientList
            name="Vegetales"
            ingredients={[
              {
                name: "Aceitunas",
                image: "https://www.svgrepo.com/show/417247/black-olives.svg",
                addIngredient: () => {add(1000)}
              },
              {
                name: "Choclo",
                image: "https://www.svgrepo.com/show/417241/sweet-corn.svg",
                addIngredient: () => {add(1000)}
              },
              {
                name: "Piña",
                image: "https://www.svgrepo.com/show/417232/pineapple.svg",
                addIngredient: () => {add(1000)}
              },
              {
                name: "Cebolla",
                image: "https://www.svgrepo.com/show/417236/red-onion.svg",
                addIngredient: () => {add(1000)}
              },
              {
                name: "Pimiento",
                image: "https://www.svgrepo.com/show/417227/mixed-peppers.svg",
                addIngredient: () => {add(1000)}
              },
              {
                name: "Tomate",
                image: "https://www.svgrepo.com/show/417240/tomato.svg",
                addIngredient: () => {add(1000)}
              },
              {
                name: "Champiñones",
                image: "https://www.svgrepo.com/show/417230/mushrooms.svg",
                addIngredient: () => {add(1000)}
              },
            ]}
          />
          <IngredientList
            name="Tamaño de Pizza"
            ingredients={[
              { name: "Familiar" },
              { name: "Mediana" },
              { name: "Personal" },
            ]}
          />
          <IngredientList
            name="Tipo de Queso"
            ingredients={[
              {
                name: "Gouda",
                image: "https://www.svgrepo.com/show/58608/cheese.svg",
              },
              {
                name: "Mozzarella",
                image: "https://www.svgrepo.com/show/417229/mozzarella.svg",
              },
            ]}
          />
                    <IngredientList
            name="Cantidad de queso"
            ingredients={[
              {
                name: "Normal",
              },
              {
                name: "Extra",
              },
              {
                name: "Doble",
              },
            ]}
          />
          <IngredientList
            name="Tamaño de Masa"
            ingredients={[{ name: "Normal" }, { name: "Delgada" }]}
          />
        </div>
        <button className="rounded-2xl bg-green-500 py-4 mx-8 text-gray-100 hover:text-gray-100 hover:bg-green-600 mt-auto mb-5">Craftear Pizza</button>
        </div>
      </div>
      
    </div>
  )
}
