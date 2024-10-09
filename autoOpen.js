(function() {
  function autoOpenPacks(packName, interval, count) {
    let opened = 0;
    const intervalId = setInterval(() => {
      const packElement = document.querySelector(`[data-pack-name="${packName}"]`);
      if (packElement) {
        packElement.click();
        opened++;
        console.log(`Opened ${packName} pack ${opened} times.`);
        
        if (count && opened >= count) {
          clearInterval(intervalId);
          console.log(`Finished opening ${count} ${packName} packs.`);
        }
      } else {
        console.log(`Pack "${packName}" not found.`);
        clearInterval(intervalId);
      }
    }, interval);

    console.log(`Auto-opening ${packName} packs every ${interval}ms.`);
    console.log('To stop, refresh the page or type "clearInterval()" in the console.');
  }

  const packName = prompt("Enter the name of the pack to auto-open:");
  const interval = parseInt(prompt("Enter the interval between opens (in milliseconds):", "5000"));
  const count = parseInt(prompt("Enter the number of packs to open (leave blank for unlimited):"));

  if (packName && interval) {
    autoOpenPacks(packName, interval, count);
  } else {
    console.log("Auto-opening cancelled.");
  }
})();
