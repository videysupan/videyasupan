const links = {
  abcde: "https://www.alodokter.com",
  abcdef: "https://www.halodoc.com",
  xyz123: "https://hellosehat.com"
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
