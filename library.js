const library = {
  tracks: {
    t01: { id: "t01", name: "Code Monkey", artist: "Jonathan Coulton", album: "Thing a Week Three" },
    t02: { id: "t02", name: "Model View Controller", artist: "James Dempsey", album: "WWDC 2003" },
    t03: { id: "t03", name: "Four Thirty-Three", artist: "John Cage", album: "Woodstock 1952" }
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] }
  }
};

// Function 1: Print all playlists
const printPlaylists = function () {
  for (const playlistId in library.playlists) {
    const playlist = library.playlists[playlistId];
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  }
};

// Function 2: Print all tracks
const printTracks = function () {
  for (const trackId in library.tracks) {
    const track = library.tracks[trackId];
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  }
};

// Function 3: Print a playlist and its tracks
const printPlaylist = function (playlistId) {
  const playlist = library.playlists[playlistId];
  if (!playlist) {
    console.log("Playlist not found.");
    return;
  }

  console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  for (const trackId of playlist.tracks) {
    const track = library.tracks[trackId];
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  }
};

// Function 4: Add existing track to existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {
  const track = library.tracks[trackId];
  const playlist = library.playlists[playlistId];

  if (!track || !playlist) {
    console.log("Track or playlist not found.");
    return;
  }
  if (!playlist.tracks.includes(trackId)) {
    playlist.tracks.push(trackId);
  }
};

// Function 5: Generate a random ID
const generateUid = function () {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

// Function 6: Add a new track to the library
const addTrack = function (name, artist, album) {
  const id = generateUid();
  library.tracks[id] = { id, name, artist, album };
};

// Function 7: Add a new playlist to the library
const addPlaylist = function (name) {
  const id = generateUid();
  library.playlists[id] = { id, name, tracks: [] };
};

// Function 8: Search for tracks
const printSearchResults = function (query) {
  const lowerQuery = query.toLowerCase();

  for (const trackId in library.tracks) {
    const track = library.tracks[trackId];
    if (
      track.name.toLowerCase().includes(lowerQuery) ||
      track.artist.toLowerCase().includes(lowerQuery) ||
      track.album.toLowerCase().includes(lowerQuery)
    ) {
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  }
};

// --------- TEST CALLS ---------
printPlaylists();
printTracks();
printPlaylist("p01");
addTrack("Hello World", "Lighthouse Band", "Bootcamp Beats");
addPlaylist("My New Playlist");
addTrackToPlaylist("t01", "p02");
printSearchResults("code");
