document.addEventListener('DOMContentLoaded', function () {
    fetch('http://api.currencylayer.com/live?access_key=28bb506378d1a80e041e0e92f8cdafd8')
        .then(response => response.json())
        .then(data => {
            if (data.quotes && data.quotes.USDEUR) {
                const exchangeRate = data.quotes.USDEUR; // EURO KE USD
                const formattedRate = ( 1 / exchangeRate); // Convert from EUR to USD
                const exchangeRateText = `1 Euro (EUR) = ${formattedRate}  (USD)`;
                document.getElementById('EURtoUSD').textContent = exchangeRateText;
            } else {
                document.getElementById('EURtoUSD').textContent = 'Error fetching exchange rate.';
            }
        
            if (data.quotes && data.quotes.USDIDR) {
                const exchangeRate = data.quotes.USDIDR; // EURO KE USD
                const formattedRate = ( 1 / exchangeRate); // Convert from EUR to USD
                const exchangeRateText = `1 US DOLLAR = ${formattedRate}  (IDR)`;
                document.getElementById('USDtoIDR').textContent = exchangeRateText;
            } else {
                document.getElementById('USDtoIDR').textContent = 'Error fetching exchange rate.';
            }

            if (data.quotes && data.quotes.USDGBP) {
                const exchangeRate = data.quotes.USDGBP; // Exchange rate from USD to EUR
                const formattedRate = ( 1 / exchangeRate);// Convert from EUR to USD
                const exchangeRateText = `1 USD = ${formattedRate}  (GBP)`;
                document.getElementById('GBPtoUSD').textContent = exchangeRateText;
            } else {
                document.getElementById('GBPtoUSD').textContent = 'Error fetching exchange rate.';
            }

            if (data.quotes && data.quotes.USDAUD) {
                const exchangeRate = data.quotes.USDAUD; // Exchange rate from USD to EUR
                const formattedRate = ( 1 / exchangeRate);// Convert from EUR to USD
                const exchangeRateText = `1 USD = ${formattedRate}  (AUD)`;
                document.getElementById('USDtoAUD').textContent = exchangeRateText;
            } else {
                document.getElementById('USDtoAUD').textContent = 'Error fetching exchange rate.';
            }

              if (data.quotes && data.quotes.USDCNY) {
                const exchangeRate = data.quotes.USDCNY; // Exchange rate from USD to EUR
                const formattedRate = ( 1 / exchangeRate);// Convert from EUR to USD
                const exchangeRateText = `1 USD = ${formattedRate}  (CNY)`;
                document.getElementById('USDtoCNY').textContent = exchangeRateText;
            } else {
                document.getElementById('USDtoCNY').textContent = 'Error fetching exchange rate.';
            }

            if (data.quotes && data.quotes.USDJPY) {
                const exchangeRate = data.quotes.USDJPY; // Exchange rate from USD to EUR
                const formattedRate = ( 1 / exchangeRate);// Convert from EUR to USD
                const exchangeRateText = `1 USD = ${formattedRate}  (JPY)`;
                document.getElementById('USDtoJPY').textContent = exchangeRateText;
            } else {
                document.getElementById('USDtoJPY').textContent = 'Error fetching exchange rate.';
            }

            if (data.quotes && data.quotes.USDAED) {
                const exchangeRate = data.quotes.USDAED; // Exchange rate from USD to EUR
                const formattedRate = ( 1 / exchangeRate);// Convert from EUR to USD
                const exchangeRateText = `1 USD = ${formattedRate}  (AED)`;
                document.getElementById('USDtoAED').textContent = exchangeRateText;
            } else {
                document.getElementById('USDtoAED').textContent = 'Error fetching exchange rate.';
            }

            if (data.quotes && data.quotes.USDKRW) {
                const exchangeRate = data.quotes.USDKRW; // Exchange rate from USD to EUR
                const formattedRate = ( 1 / exchangeRate);// Convert from EUR to USD
                const exchangeRateText = `1 USD = ${formattedRate}  (KRW)`;
                document.getElementById('USDtoKRW').textContent = exchangeRateText;
            } else {
                document.getElementById('USDtoKRW').textContent = 'Error fetching exchange rate.';
            }

             
        })
        .catch(error => {
            console.error('Error fetching exchange rate:', error);
        });
});
