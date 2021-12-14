import React from 'react';
import CampaignContext from "./Context";

const CampaignProvider = async ({ children }) => {
  return (
    <CampaignContext.Provider
      value={{
        campaigns: [],
        setCampaigns,
      }}
    >
      {children}
    </CampaignContext.Provider>
  )
}

export default CampaignProvider;