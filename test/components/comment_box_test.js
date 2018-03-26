import {renderComponent, expect} from "../test_helper"
import CommentBox from "../../src/components/comment_box"

describe("CommentBox", () => {
  let component
  beforeEach(() => {
    component = renderComponent(CommentBox)
  })
  it("it has a class", () => {
    expect(component).to.have.class("comment-box")
  })

  it("it has a textarea", () => {
    expect(component.find("textarea")).to.exist
  })

  it("it has a button", () => {
    expect(component.find("button")).to.exist
  })

  describe("enters a text", () => {
    beforeEach(() => {
      component.find("textarea").simulate("change", "new comment")
    })
    it("show a text when inputted", () => {
      expect(component.find("textarea")).to.have.value("new comment")
    })

    it("clears the textarea in submitting", () => {
      component.simulate("submit")
      expect(component.find("textarea")).to.have.value("")
    })
  })
})
