# scripts/dev.sh

# Unified server: Flask serves both API and static frontend
alias startserver='python3 server.py &'
alias stopserver='pkill -f "python3 server.py"'
