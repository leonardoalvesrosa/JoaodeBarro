import { createContext } from 'react';

const CampaignContext = createContext({
  campaigns: [],
  setCampaigns: () => { },
});

export default CampaignContext;