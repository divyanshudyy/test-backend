export function getServiceStatus() {
  return {
    service: "Demo Service",
    status: "OK",
    timestamp: new Date().toISOString()
  };
}