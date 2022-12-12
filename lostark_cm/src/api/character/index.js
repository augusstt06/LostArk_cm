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

export const getCharacter_Armor = async (userId, setArmor) => {
  try {
    const res = await customAxios.get(
      `/armories/characters/${userId}/equipment`
    );
    console.log(res.data);
    setArmor(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getCharacter_Engrave = async (userId, setEngrave) => {
  try {
    const res = await customAxios.get(`/armories/characters/${userId}/engravings
        `);
    setEngrave(res.data["Effects"]);
  } catch (err) {
    console.log(err);
  }
};

export const getCharacter_Gem = async (userId, setGem) => {
  try {
    const res = await customAxios.get(`/armories/characters/${userId}/gems'`);
    setGem(res.data);
  } catch (err) {
    console.log(err);
  }
};
