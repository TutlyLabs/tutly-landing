import "../../app/globals.css"


export default function HomeLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
