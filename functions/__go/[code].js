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
  10: "https://cdn.videy.co/2wYpxvpY1.mp4",
  11: "https://cdn.videy.co/oEdAHEJa1.mp4",
  12: "https://cdn.videy.co/T8x8lpYN1.mp4",
  13: "https://cdn.videy.co/SbNwldSX1.mp4",
  14: "https://cdn.videy.co/Ri8N3FAC1.mp4",
  15: "https://cdn.videy.co/KLuMbLXK1.mp4",
  16: "https://cdn.videy.co/cOcSuvTY1.mp4",
  17: "https://cdn.videy.co/w2Y6YebS1.mp4",
  18: "https://cdn.videy.co/G9l11XsK1.mp4",
  19: "https://cdn.videy.co/cgyd9kJ41.mp4",
  20: "https://cdn.aceimg.com/ceP3dV1D5.mp4",
  21: "https://cdn.videy.co/ZrRo4vZz1.mp4"
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
