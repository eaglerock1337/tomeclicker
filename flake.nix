{
  description = "Tomeclicker Svelte dev shell";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";

  outputs = { self, nixpkgs, ... }: let
    system = "x86_64-linux";
    pkgs = import nixpkgs { inherit system; };
  in {
    devShells.${system}.default = pkgs.mkShell {
      name = "tomeclicker-dev";

      packages = [
        pkgs.nodejs_20  # or pkgs.nodejs_latest if you want bleeding edge
        pkgs.nodePackages.npm
      ];

      shellHook = ''
        export PATH="./node_modules/.bin:$PATH"

        if [ ! -d node_modules ]; then
          echo "📦 node_modules missing, installing with npm..."
          npm install
        fi

        echo "🧙 Tomeclicker dev shell ready!"
        echo "👉 Common commands: npm run dev | build | preview | check"
      '';
    };
  };
}
