export const load = async (loadEvent)=> {
    const { fetch } = loadEvent;
    const response = await fetch('http://localhost:4000/profiles');
    const profiles = await response.json();
    return {profiles};
}

