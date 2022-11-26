// viet cac selections
import { createSelector } from "@reduxjs/toolkit";

export const getStatus = (state) => state.manage.status;
export const getAllFoods = (state) => state.manage.foods;
export const getCategory = (state) => state.filter.category;

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
