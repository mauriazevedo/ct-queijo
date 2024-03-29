import { API_URL } from "../constants/apiUrl";
import Axios from "axios";

export async function AddOrder(data) {
  const result = await Axios.post(`${API_URL}add-order`, {
    user_id: data.user_id,
    cheese_amount: data.cheese_amount,
    dulce_de_leche_amount: data.dulce_de_leche_amount,
    yogurt_amount: data.yogurt_amount,
    deadline: data.deadline,
    reason: data.reason,
  });

  return result.data;
}

export async function GetOrdersById(id) {
  const result = await Axios.get(`${API_URL}get-orders/${id}`);

  return result.data;
}

export async function GetOrdersByStatus(status) {
  const result = await Axios.get(`${API_URL}get-orders-by-status/${status}`);

  return result.data;
}

export async function UpdateOrderStatus(data) {
  const result = await Axios.patch(`${API_URL}update-order-status`, {
    order_id: data.order_id,
    message: data.message,
    new_status: data.new_status,
  });

  return result.data;
}
