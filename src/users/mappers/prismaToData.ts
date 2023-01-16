export function mapPrismaData(data: any) {
  const { id, username, address, generalData, professionalData } = data;

  delete address.id;
  delete address.userId;
  delete generalData.id;
  delete generalData.userId;
  delete professionalData.id;
  delete professionalData.userId;

  return {
    user: {
      id,
      username,
    },
    address,
    generalData,
    professionalData,
  };
}
