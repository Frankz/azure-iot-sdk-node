/*! Copyright (c) Microsoft. All rights reserved.
 *! Licensed under the MIT license. See LICENSE file in the project root for full license information.
 */

'use strict';

/**
 * @class       module:azure-iot-common.ArgumentError
 * @classdesc   Error thrown when an argument is invalid.
 *
 * @augments {Error}
 */
export class ArgumentError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'ArgumentError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * @class       module:azure-iot-common.ArgumentOutOfRangeError
 * @classdesc   Error thrown when an argument has a value that is out of the admissible range.
 *
 * @augments {Error}
 */
export class ArgumentOutOfRangeError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'ArgumentOutOfRangeError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * @class       module:azure-iot-common.DeviceMaximumQueueDepthExceededError
 * @classdesc   Error thrown when the message queue for a device is full.
 *
 * @augments {Error}
 */
export class DeviceMaximumQueueDepthExceededError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'DeviceMaximumQueueDepthExceededError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * @class       module:azure-iot-common.DeviceNotFoundError
 * @classdesc   Error thrown when a device cannot be found in the IoT Hub instance registry.
 *
 * @augments {Error}
 */
export class DeviceNotFoundError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'DeviceNotFoundError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * @class       module:azure-iot-common.FormatError
 * @classdesc   Error thrown when a string that is supposed to have a specific formatting is not formatted properly.
 *
 * @augments {Error}
 */
export class FormatError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'FormatError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * @class       module:azure-iot-common.UnauthorizedError
 * @classdesc   Error thrown when the connection parameters are wrong and the server refused the connection.
 *
 * @augments {Error}
 */
export class UnauthorizedError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'UnauthorizedError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotImplementedError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'NotImplementedError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotConnectedError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'NotConnectedError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class IotHubQuotaExceededError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'IotHubQuotaExceededError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}


export class MessageTooLargeError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'MessageTooLargeError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class InternalServerError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'InternalServerError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ServiceUnavailableError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'ServiceUnavailableError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class IotHubNotFoundError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'IotHubNotFoundError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * @class       module:azure-iot-common.IoTHubSuspendedError
 * @classdesc   Error thrown when IoT Hub has been suspended.
 *
 * @augments {Error}
 */
export class IoTHubSuspendedError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'IoTHubSuspendedError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class JobNotFoundError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'JobNotFoundError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class TooManyDevicesError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'TooManyDevicesError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * @class       module:azure-iot-common.ThrottlingError
 * @classdesc   Error thrown when IoT Hub is throttled due to excessive activity.
 *
 * @augments {Error}
 */
export class ThrottlingError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'ThrottlingError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * @class       module:azure-iot-common.DeviceAlreadyExistsError
 * @classdesc   Error thrown when the device id used for device creation already exists in the Device Identity Registry.
 *
 * @augments {Error}
 */
export class DeviceAlreadyExistsError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'DeviceAlreadyExistsError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * @class       module:azure-iot-common.DeviceMessageLockLostError
 * @classdesc   Error thrown when settling a message fails because the lock token associated with the message is lost.
 *
 * @augments {Error}
 */
export class DeviceMessageLockLostError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'DeviceMessageLockLostError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * @class       module:azure-iot-common.InvalidEtagError
 * @classdesc   Error thrown when the eTag specified is incorrectly formatted or out of date.
 *
 * @augments {Error}
 */
export class InvalidEtagError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'InvalidEtagError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * @class       module:azure-iot-common.InvalidOperationError
 * @classdesc   Error thrown when an operation is attempted but is not allowed.
 *
 * @augments {Error}
 */
export class InvalidOperationError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'InvalidOperationError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * @class       module:azure-iot-common.PreconditionFailedError
 * @classdesc   Error thrown when a condition that should have been met in order to execute an operation was not.
 *
 * @augments {Error}
 */
export class PreconditionFailedError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'PreconditionFailedError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * @class       module:azure-iot-common.TimeoutError
 * @classdesc   Error thrown when a timeout occurs
 *
 * @augments {Error}
 */
export class TimeoutError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'TimeoutError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * @class       module:azure-iot-common.BadDeviceResponseError
 * @classdesc   Error thrown when a device sends a bad response to a device method call.
 *
 * @augments {Error}
 */
export class BadDeviceResponseError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'BadDeviceResponseError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * @class       module:azure-iot-common.GatewayTimeoutError
 * @classdesc   Error thrown when the IoT Hub instance doesn't process the device method call in time.
 *
 * @augments {Error}
 */

export class GatewayTimeoutError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'GatewayTimeoutError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * @class       module:azure-iot-common.DeviceTimeoutError
 * @classdesc   Error thrown when the device doesn't process the method call in time.
 *
 * @augments {Error}
 */
export class DeviceTimeoutError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'DeviceTimeoutError';
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}
