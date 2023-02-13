import { PipelineStatus } from '@canvass/shared/models';
import {
  isSuccessfulJob,
  isFailedJob,
  isRunningJob,
} from '../src/getJobStatuses';

describe('Test Job Status Checkers', () => {
  describe('Test Successful Jobs', () => {
    test('success statuses', () => {
      const trueStatuses = [
        PipelineStatus.SUCCESS,
        PipelineStatus.PARTIAL_SUCCESS,
      ];
      trueStatuses.forEach((status) =>
        expect(isSuccessfulJob(status)).toBeTruthy()
      );
    });

    test('other statuses', () => {
      const falseStatuses = [
        PipelineStatus.CREATED,
        PipelineStatus.FAILED,
        PipelineStatus.RUNNING,
        PipelineStatus.SUBMITTED,
        undefined,
      ];
      falseStatuses.forEach((status) =>
        expect(isSuccessfulJob(status)).toBeFalsy()
      );
    });
  });

  describe('Test Failed Jobs', () => {
    test('failed statuses', () => {
      const trueStatuses = [PipelineStatus.FAILED];
      trueStatuses.forEach((status) =>
        expect(isFailedJob(status)).toBeTruthy()
      );
    });

    test('other statuses', () => {
      const falseStatuses = [
        PipelineStatus.CREATED,
        PipelineStatus.SUCCESS,
        PipelineStatus.PARTIAL_SUCCESS,
        PipelineStatus.RUNNING,
        PipelineStatus.SUBMITTED,
        undefined,
      ];
      falseStatuses.forEach((status) =>
        expect(isFailedJob(status)).toBeFalsy()
      );
    });
  });

  describe('Test Running Jobs', () => {
    test('running statuses', () => {
      const trueStatuses = [PipelineStatus.RUNNING, PipelineStatus.SUBMITTED];
      trueStatuses.forEach((status) =>
        expect(isRunningJob(status)).toBeTruthy()
      );
    });

    test('other statuses', () => {
      const falseStatuses = [
        PipelineStatus.CREATED,
        PipelineStatus.SUCCESS,
        PipelineStatus.PARTIAL_SUCCESS,
        PipelineStatus.FAILED,
        undefined,
      ];
      falseStatuses.forEach((status) =>
        expect(isRunningJob(status)).toBeFalsy()
      );
    });
  });
});
