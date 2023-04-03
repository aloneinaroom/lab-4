import { notification } from "antd";
import customFetch from "../../lib/customFetch"




export function updateItem(body) {
  return async (dispatch) => {
    try {
      // dispatch({type: 'SET_KEY_CATEGORY', key: 'loaded', data: false})
      const data = await customFetch('/api/profile?id=' + body.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
      });
      dispatch({type: 'SET_PROFILE', data})
      notification.success({
        message: 'Дані успішно збережені',
      });
    } catch (error) {
      // dispatch({type: 'SET_KEY_CATEGORY', key: 'loaded', data: true})

      notification.error({
        message: error.message,
      });
    }
  }
}

