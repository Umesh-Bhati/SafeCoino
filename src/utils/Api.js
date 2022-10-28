import axios from "axios";

const baseCoinDataUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

export const fetchCoinData = async () => {
const response = await axios({
    method: 'get',
    url: baseCoinDataUrl,
})
return response.data
}