export const handleExpressSubmit = (
  expressRatesType,
  expressRatesParcelTo,
  expressRatesParcelWeightType,
  allExpressRatesParcel,
  allExpressRatesDocument
) => {
  if (expressRatesType == "Parcel") {
    const country = allExpressRatesParcel.find(
      (country) => country.country == expressRatesParcelTo
    );
    console.log(country);
    const result = country[expressRatesParcelWeightType];
    console.log(result);
    return result;
  } else {
    const country = allExpressRatesDocument.find(
      (country) => country.country == expressRatesParcelTo
    );
    console.log(country);
    const result = country[expressRatesParcelWeightType];
    console.log(result);
    return result;
  }
};
export const handleDoorToDoorSubmit = (weight, productType, allD2dRates) => {
  const selectedproductType = allD2dRates.find(
    (pdctType) => pdctType.id == productType
  );
  if (weight <= 1) {
    const result = selectedproductType.parcel;
    return { result, perKg: selectedproductType.parcel };
  }
  if (1 < weight && weight <= 10) {
    const result = Math.round(weight * selectedproductType.ten);
    return { result, perKg: selectedproductType.ten };
  }
  if (weight > 10) {
    const result = Math.round(weight * selectedproductType.eleven);
    return { result, perKg: selectedproductType.eleven };
  }
};

export const handleFreightSubmit = () => {};
