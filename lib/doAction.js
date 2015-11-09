/**
 * @function doAction
 * @description
 * A universal write function for localStorage and sessionStorage.
 * @param {object} request - the storage request object
 * @param {string} request.target - a string determines which storage to use
 * @param {string} request.action - a string determines the write action
 * @param {string} request.key - the key of a storage item
 * @param {string} request.value - the value of a storage item
 */
function doAction(request) {
  const args = [request.target, request.action, request.key, request.value]
  // Store the third and the fourth parameter in a new array, if defined.
  const storageArgs = args.slice(2)
  // Determine the storage target.
  const storage = request.target === `local` ? localStorage : sessionStorage

  // Execute the storage action and pass arguments if they were defined.
  storage[request.action](...storageArgs)
}

export default doAction