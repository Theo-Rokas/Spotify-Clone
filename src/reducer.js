export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Remove after finish developing...
    // token: "BQCk_hZ4U31nBcM6xllM1eMzyLT5NEJmPyo1YSiHsU3V6UC4lc8TV7DJi8zwKgECKHj81lmkJdM3uxmB3jquPCYxfoLV84AnlJU8iH3zJfELs6Gy7Ifh5QiZWB87BMzWcJnN2K8jQj7qsWSciPD11yaVzk8Hj-Zsy7PeO0dirKutTel9",
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state
    }
}

export default reducer