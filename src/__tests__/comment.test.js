/* eslint-disable linebreak-style */
import { addCommentToList } from '../js/DOM-manipulations.js';
import commentsMock from '../__mocks__/comment-mock.js';

describe('Testing the functions of comment', () => {
  test('should be 7 element', () => {
    const comments = commentsMock;
    const commentContainer = document.createElement('ul');

    comments.forEach((coment) => {
      const {
        comment,
        username,
        creation_date: creationDate,
      } = coment;

      addCommentToList({
        commentList: commentContainer,
        username,
        comment,
        creationDate,
      });
    });
    expect(commentContainer.childElementCount).toBe(7);
  });
});