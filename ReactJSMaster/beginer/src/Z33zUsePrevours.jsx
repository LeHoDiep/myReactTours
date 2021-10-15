import React, { useRef, useEffect } from 'react'

export default function Z33zUsePrevours(value) {
  const ref = useRef(null)
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}
