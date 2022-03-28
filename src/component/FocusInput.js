import React, { useRef, useEffect } from 'react'

function FocusInput() {
	const inputRef = useRef(null)//create ref by calling ref and passing initial value

	useEffect(() => {

        //focus the input element
		inputRef.current.focus()
        
	}, [])
	return (
		<div>
			<input ref={inputRef} type="text" />
		</div>
	)
}

export default FocusInput