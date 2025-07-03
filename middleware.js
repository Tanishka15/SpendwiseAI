import { clerkMiddleware } from '@clerk/nextjs/server';

const isProtectedRoutes = (['/dashboard(.*)', '/account(.*)', '/transactions(.*)', '/settings(.*)']);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  const isProtected = isProtectedRoutes.some((route) =>
    new RegExp(route).test(req.nextUrl.pathname)
  );

  if (!userId && isProtected) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn({
      returnBackUrl: req.nextUrl.pathname,
    });
  }
});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ] ,
}