import ClickSpark from "@/components/ClickSpark"
import "./globals.css"
import "./styles/common-styles.scss"
import Header from "@/components/Header/Header"
import SmoothScroll from "@/components/SmoothScroll"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>

        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      <body>
        {/* <SmoothScroll /> */}
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <Header />
          {children}
        </ClickSpark>
      </body>
    </html>
  )
}
