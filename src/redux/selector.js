// viet cac selections
import { createSelector } from "@reduxjs/toolkit";

export const getStatus = (state) => state.manage.status;
export const getAllFoods = (state) => state.manage.foods;
export const getCategory = (state) => state.filter.category;
export const getHotPizza = (state) => state.filter.hotPizza;

export const getFoodsBySelect = createSelector(
  getAllFoods,
  getCategory,
  (foods, category) => {
    if (category === "All") {
      return foods;
    } else {
      return foods.filter((food) => food.category === category);
    }
  }
);

export const getFoodsByCost = createSelector(
  getAllFoods,
  getHotPizza,
  (foods, cost) => {
    return foods.filter((food) => food.price >= cost).slice(0, 4);
  }
);
