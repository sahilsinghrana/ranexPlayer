import React from "react";

export const lazyWithRetry = (importer) => {
  const retryImport = async () => {
    try {
      return await importer();
    } catch (error) {
      // retry 5 times with 1 second delay
      for (let i = 0; i < 5; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        try {
          return await importer();
        } catch (e) {
          console.log("retrying import");
        }
      }
      throw error;
    }
  };
  return React.lazy(retryImport);
};
