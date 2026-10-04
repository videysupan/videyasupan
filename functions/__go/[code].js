const links = {
  1: "https://cdn.videy.co/K3Nl3Vnj1.mp4",
  2: "https://cdn.videy.co/wReDbco71.mp4",
  3: "https://cdn.videy.co/mWW6dJSe1.mp4",
  4: "x"
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
