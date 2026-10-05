const links = {
  1: "https://cdn.videy.co/K3Nl3Vnj1.mp4",
  2: "https://cdn.videy.co/wReDbco71.mp4",
  3: "https://cdn.videy.co/mWW6dJSe1.mp4",
  4: "https://cdn.videy.co/OBhEnWWi1.mp4",
  5: "https://cdn.videy.co/dg8J3aw81.mp4",
  6: "https://cdn.videy.co/50Znp5Fr1.mp4",
  7: "https://cdn.videy.co/uVzJ0jJD1.mp4",
  8: "https://cdn.videy.co/oJFQLEvP1.mp4",
  9: "https://cdn.videy.co/vD4QzxvW1.mp4",
  10: "https://cdn.videy.co/2wYpxvpY1.mp4"
};

export function onRequestGet(context) {
  const code = context.params.code;
  const destination = links[code];

  if (!destination) {
    return new Response("Link Not Available", {
      status: 404,
      headers: {
        "Content-Type": "text/plain; charset=UTF-8"
      }
    });
  }

  return Response.redirect(destination, 302);
}
