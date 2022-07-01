const getAthanTimes = async () => {
  try {
    const response = await fetch(
      'https://api.aladhan.com/v1/timingsByCity?city=Liverpool&country=Australia&method=3'
    );
    const json = await response.json();
    return json.data.timings;
  } catch (error) {
    console.log(error);
  }
};

export default { getAthanTimes };
