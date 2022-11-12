import { Button, Col, Modal, Row, Space } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";

const CustomModal2 = ({
  customHeaderButtons,
  isDraggable,
  isModalOpen,
  closeModal,
  children,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = useRef(null);

  const handleOk = (e) => {
    console.log(e);
    closeModal(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    closeModal(false);
  };
  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  const customHeaderStyles = {
    display: "flex",
    justifyContent: "space-between",
  };

  const draggableModalProps = {
    title: {
      style: {
        width: "100%",
        cursor: "move",
      },
      onMouseOver: () => {
        if (disabled) {
          setDisabled(false);
        }
      },
      onMouseOut: () => setDisabled(true),
      onFocus: () => {},
      onBlur: () => {},
    },
    restProps: {
      open: isModalOpen,
      onOk: handleOk,
      onCancel: handleCancel,
      modalRender: (modal) => (
        <Draggable
          disabled={disabled}
          bounds={bounds}
          onStart={(event, uiData) => onStart(event, uiData)}
        >
          <div ref={draggleRef}>{modal}</div>
        </Draggable>
      ),
    },
  };

  const modalProps = {
    title: "Basic Modal",
    open: isModalOpen,
    onOk: closeModal,
    onCancel: closeModal,
  };

  if (isDraggable)
    return (
      <React.Fragment>
        <Modal
          closable={customHeaderButtons ? false : true}
          title={
            <Space style={customHeaderStyles}>
              <Space {...draggableModalProps.title}>
                <span>Draggable Modal</span>
              </Space>
              <Space>{customHeaderButtons?.map((title) => title)}</Space>
            </Space>
          }
          {...draggableModalProps.restProps}
        >
          {children}
        </Modal>
      </React.Fragment>
    );
  return <Modal {...modalProps}>{children}</Modal>;
};
export default CustomModal2;
