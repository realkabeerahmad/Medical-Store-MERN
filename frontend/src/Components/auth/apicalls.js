export const signup = async (user) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export async function login(user) {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
}

export async function sendOTP(email) {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/sendotp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(email),
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
}
