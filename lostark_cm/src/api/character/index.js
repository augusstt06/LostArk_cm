import { customAxios } from "../customAxios";

export const getCharacter_Profile = async (userId) => {
  try {
    const res = await customAxios.get(
      `/armories/characters/${userId}/profiles`
    );
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getCharacter_Armor = async (userId, setInfo) => {
  try {
    const res = await customAxios.get(
      `/armories/characters/${userId}/equipment`
    );
    console.log(res.data);
    setInfo(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getCharacter_Engrave = async (userId) => {
  try {
    const res = await customAxios.get(`/armories/characters/${userId}/engravings
        `);
    console.log(res.data["Effects"]);
  } catch (err) {
    console.log(err);
  }
};
