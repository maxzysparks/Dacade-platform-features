async function handleCUSDRewards(userId, walletOption, customAddress) {
  try {
    // Get user's cUSD balance
    let cUSDBalance = await getCUSDBalance(userId);

    // Check if user wants to use Wallet Connect
    if (walletOption == "wallet_connect") {
      // Get user's Wallet Connect address
      let walletConnectAddress = await getWalletConnectAddress(userId);
      // Add cUSD rewards to user's Wallet Connect address
      await addCUSDRewardsToAddress(walletConnectAddress, cUSDBalance);
    } else {
      // User wants to use a custom address
      // Add cUSD rewards to the custom address
      await addCUSDRewardsToAddress(customAddress, cUSDBalance);
    }
  } catch (error) {
    // Handle error
    console.error(error);
  }
}
