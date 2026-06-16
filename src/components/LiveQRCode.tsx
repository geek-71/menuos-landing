'use client'

import { useEffect, useRef } from 'react'
import QRCode from 'qrcode'

interface Props {
  value: string
  size?: number
  className?: string
}

export function LiveQRCode({ value, size = 130, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    QRCode.toCanvas(canvasRef.current, value, {
      width:  size,
      margin: 1,
      color: {
        dark:  '#1A1410',
        light: '#FBF7F0',
      },
    })
  }, [value, size])

  return <canvas ref={canvasRef} className={className} />
}
