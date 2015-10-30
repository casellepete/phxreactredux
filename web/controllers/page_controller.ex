defmodule Phxreactredux.PageController do
  use Phxreactredux.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
