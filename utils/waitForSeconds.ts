/**
 * Waits for the specified number of seconds.
 * @param seconds The number of seconds to wait.
 */
function waitForSeconds(
  seconds: number,
  throwError: boolean = false
): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(
      throwError ? () => reject("Bad Error") : resolve,
      seconds * 1000
    );
  });
}

export default waitForSeconds;
