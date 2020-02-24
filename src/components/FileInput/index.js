import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useField } from '@unform/core';

export default function FileInput({ name, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback(e => {
    const file = e.target.files[0];
    if (!file) {
      setPreview(null);
    }
    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_, value) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <label htmlFor={fieldName} id="thumbnail">
        {preview && (
          <img
            src={preview}
            alt="Preview"
            width="100%"
            height="100%"
            style={{ borderRadius: '28px', border: 'none' }}
          />
        )}
        {preview ? (
          <input
            type="file"
            ref={inputRef}
            onChange={handlePreview}
            style={{ display: 'none' }}
            {...rest}
          />
        ) : (
          <input
            type="file"
            ref={inputRef}
            onChange={handlePreview}
            {...rest}
          />
        )}
      </label>

      {error && <span>{error}</span>}
    </>
  );
}
