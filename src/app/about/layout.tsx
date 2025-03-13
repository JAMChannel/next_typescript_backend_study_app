import React from 'react'

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-100 h-screen p-4">
      <h1>AboutLayout</h1>
      {children}
    </div>
  );
}
